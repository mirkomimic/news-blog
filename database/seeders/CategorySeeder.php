<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
  private $categories = ['bussines', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    foreach ($this->categories as $category) {
      $cat = new Category();
      $cat->name = $category;
      $cat->save();
    }
  }
}
