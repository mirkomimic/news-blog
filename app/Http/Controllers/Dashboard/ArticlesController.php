<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Services\ArticlesImagesService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticlesController extends Controller
{
  public function __construct(
    protected ArticlesImagesService $articlesImagesService
  ) {}

  public function index()
  {
    $categories = Category::all();

    return Inertia::render('Dashboard/Articles/Index', [
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
    // dd($request->toArray());
    return redirect()->route('dashboard.articles.index');
  }
}
