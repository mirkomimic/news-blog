<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticlesController extends Controller
{
  public function index()
  {
    $categories = Category::all();

    return Inertia::render('Dashboard/Articles', [
      'categories' => $categories
    ]);
  }
}
