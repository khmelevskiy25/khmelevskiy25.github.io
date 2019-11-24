@extends('layout')

@section('content')
    <div class="container">
        <h3>Edit tasks # - {{$task->id}}</h3>
        <div class="row">
            <div class="col-md-12">
                {!!  Form::open(['route' => ['tasks.update', $task->id], 'method'=>'PUT']) !!}
                <div class="form-group">
                    <input type="text" class="form-control" name="title" value="{{
                    $task->title}}">
                    <br>
                    <textarea name="description" class="form-control">{{$task->description}}</textarea>
                    <button class="btn btn-warning">Submit</button>
                </div>
                {!! Form::close() !!}
            </div>
        </div>
        @include('errors')
    </div>
@endsection('content')