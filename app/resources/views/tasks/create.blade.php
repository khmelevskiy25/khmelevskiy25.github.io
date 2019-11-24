@extends('layout')

@section('content')
    <div class="container">
        <h3>Create tasks</h3>
        <div class="row">
            <div class="col-md-12">
                {!!  Form::open(['route' => ['tasks.store']]) !!}
                <div class="form-group">
                    <input type="text" class="form-control" name="title" value="{{
                    old('title')}}">
                    <br>
                    <textarea name="description" class="form-control">{{old('description')}}</textarea>
                    <button class="btn btn-success">Submit</button>
                </div>
                {!! Form::close() !!}
            </div>
        </div>
        @include('errors')
    </div>
@endsection('content')