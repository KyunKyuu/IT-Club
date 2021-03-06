<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->foreignId('division_id');
            $table->foreignId('user_id')->unique();
            $table->string('name');
            $table->string('class');
            $table->string('majors');
            $table->string('position');
            $table->string('status')->default(0);
            $table->string('image')->nullable();
            $table->timestamp('entry_year')->nullable();
            $table->foreignId('created_by')->default(1);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('members');
    }
}
