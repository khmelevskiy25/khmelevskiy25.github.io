@extends('layout')

@section('content')
    <div class="container">
        <h3>My tasks</h3>
        <a href="{{route('tasks.create')}}" class="btn btn-success">Create</a>
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <table class="table">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Actions</td>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($tasks as $task)
                        <tr>
                            <td>{{$task->id}}</td>
                            <td>{{$task->title}}</td>
                            <td class="d-flex ">
                                <a href="{{route('tasks.show', $task->id)}}">
                                    <i class="far fa-eye"></i>
                                </a>
                                <a href="{{route('tasks.edit', $task->id)}}">
                                    <i class="far fa-edit"></i>
                                </a>
                                {!! Form::open(['method' => 'DELETE',
                                'route' => ['tasks.destroy', $task->id]]) !!}
                                <button class="btn_delete" onclick="return confirm('Are you sure?')"><i class="far fa-trash-alt"></i></button>
                                {!! Form::close() !!}
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <style>
        .btn_delete {
            border: navajowhite;
            background: transparent;
            color: #007bff;
            padding: 0;
            margin: 0;
        }
        td.d-flex > a {
            margin-right: 5px;
        }
    </style>
@endsection('content')