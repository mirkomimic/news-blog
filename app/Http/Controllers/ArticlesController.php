<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Services\CRUD\ArticlesCrudService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticlesController extends Controller
{
  public function __construct(
    protected ArticlesCrudService $articlesCrudService
  ) {}

  public function index()
  {
    $articles = $this->articlesCrudService->read();

    return Inertia::render('Home', [
      'articles' => $articles
    ]);
  }

  public function show(Article $article)
  {
    $latestArticles = Article::orderBy('created_at', 'desc')->take(3)->get();

    $moreFromCategory = Article::query()->where('category_id', $article->category->id)->orderBy('created_at', 'desc')->take(3)->get();

    return Inertia::render('Articles/Show', [
      'article' => $article,
      'latestArticles' => $latestArticles,
      'moreFromCategory' => $moreFromCategory
    ]);
  }
}
