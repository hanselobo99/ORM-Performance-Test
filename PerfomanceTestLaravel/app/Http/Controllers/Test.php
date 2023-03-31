<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Test extends Controller
{
    public function getAll()
    {
        return Product::all();
    }

    public function getOne($id)
    {
        return Product::findOrFail($id);
    }

    public function getCategory()
    {
        return ProductCategory::with("product")->get();
    }
    public function getAllQuery()
    {
        return DB::table('products')->get();
    }

    public function getOneQuery($id)
    {
        return DB::table('products')->where('id','=',$id)->get();
    }

    public function getCategoryQuery()
    {
        return DB::table('product_categories')
            ->join("products","product_categories.id",'=','products.product_category_id')
            ->get();
    }
}
