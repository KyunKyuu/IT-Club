<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Division;
class MemberITController extends Controller
{
    public function member()
    {
        
        $divisions = Division::get();
 
        return view('main.master.profiles.member', compact('divisions'));
    }
}
