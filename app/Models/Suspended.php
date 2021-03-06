<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Suspended extends Model
{
    use HasFactory;

    protected $table = 'blog_suspended';
    protected $fillable = ['blog_id', 'description', 'suspended'];
}
