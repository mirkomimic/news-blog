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
    return Inertia::render('Articles/Show', [
      'article' => $article
    ]);
  }
}
