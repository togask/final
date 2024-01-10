<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Yogurt;

class YogurtController extends Controller
{
    /**
     * 全てのヨーグルトを取得する
     */
    public function index()
    {
        $yogurts = Yogurt::all();
        return response()->json($yogurts);
    }

    /**
     * 新しいヨーグルトを作成する
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'price' => 'required|integer'
        ]);

        $yogurt = Yogurt::create($validatedData);
        return response()->json($yogurt, 201);
    }

    /**
     * 特定のヨーグルトを取得する
     */
    public function show(Yogurt $yogurt)
    {
        return response()->json($yogurt);
    }

    /**
     * ヨーグルトのデータを更新する
     */
    public function update(Request $request, Yogurt $yogurt)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'price' => 'required|integer'
        ]);

        $yogurt->update($validatedData);
        return response()->json($yogurt);
    }

    /**
     * ヨーグルトを削除する
     */
    public function destroy(Yogurt $yogurt)
    {
        $yogurt->delete();
        return response()->json(null, 204);
    }
}
