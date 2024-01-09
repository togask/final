<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Yogurt;

class YogurtController extends Controller
{
    public function index()
    {
        $yogurts = Yogurt::all();
        return response()->json($yogurts);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'price' => 'required|integer'
        ]);

        $yogurt = Yogurt::create($validatedData);
        return response()->json($yogurt, 201);
    }

    public function show(Yogurt $yogurt)
    {
        return response()->json($yogurt);
    }

    public function update(Request $request, Yogurt $yogurt)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'price' => 'required|integer'
        ]);

        $yogurt->update($validatedData);
        return response()->json($yogurt);
    }

    public function destroy(Yogurt $yogurt)
    {
        $yogurt->delete();
        return response()->json(null, 204);
    }
}
