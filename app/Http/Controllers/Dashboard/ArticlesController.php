<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;
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
    $articles = Article::all();
    $categories = Category::all();

    return Inertia::render('Dashboard/Articles/Index', [
      'articles' => $articles,
      'categories' => $categories
    ]);
  }

  public function create()
  {
    $categories = Category::all();

    return Inertia::render('Dashboard/Articles/Create', [
      'categories' => $categories
    ]);
  }

  public function store(Request $request)
  {
    $this->articlesCrudService->create($request);
    // dd($request->toArray());
    return redirect()->route('dashboard.articles.index');
  }

  public function update(Article $article, Request $request)
  {
    $this->articlesCrudService->update($article, $request);
    return redirect()->route('dashboard.articles.index');
  }

  public function destroy(Article $article)
  {
    $this->articlesCrudService->delete($article);
    return redirect()->route('dashboard.articles.index');
  }
}
