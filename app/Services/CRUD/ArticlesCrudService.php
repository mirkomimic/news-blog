<?php

namespace App\Services\CRUD;

use App\Models\Article;
use App\Services\ImagesService\ArticlesImagesService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ArticlesCrudService
{
  public function __construct(
    protected ArticlesImagesService $articlesImagesService
  ) {}

  public function create(Request $request)
  {
    $article = new Article();
    $article->title = $request->title;
    $article->category_id = $request->category_id;
    $article->user_id = Auth::id();
    $article->content = $request->content;
    $article->save();

    if ($request->hasFile('images.*.file') || $request->hasFile('thumbnail')) {
      $this->articlesImagesService->create('articles', $article->id, $request->images, $request->thumbnail);

      $article->thumbnail = $request->thumbnail->hashName();

      if ($request->hasFile('images.*.file')) {
        foreach ($request->images as $image) {
          $article->images()->create([
            'image' => $image['file']->hashName(),
            'image_blob' => $image['url']
          ]);
        }
      }
    }

    $article->save();
  }

  public function read()
  {
    $top6Articles = Article::where('top6', true)
      ->orderBy('created_at', 'desc')
      ->take(5)
      ->get();

    $mainNewsArticle = Article::where('main_news', true)
      ->orderBy('created_at', 'desc')
      ->first();

    $articles = $mainNewsArticle ? collect([$mainNewsArticle])->concat($top6Articles) : $top6Articles;

    return $articles;
  }

  public function update(Article $article, Request $request): void
  {
    $article->title = $request->title;
    $article->category_id = $request->category_id;
    $article->content = $request->content;
    $article->top6 = $request->top6;
    $article->main_news = $request->main_news;

    if ($request->hasFile('images.*.file')) {
      $this->articlesImagesService->saveImages('articles', $article->id, $request->images);
    }

    if ($request->hasFile('thumbnail')) {
      $this->articlesImagesService->updateThumbnail('articles', $article->id, $request->thumbnail);

      $article->thumbnail = $request->thumbnail->hashName();
    }

    $article->save();
  }

  public function delete(Article $article)
  {
    $this->articlesImagesService->delete('articles', $article->id);
    $article->delete();
  }
}
