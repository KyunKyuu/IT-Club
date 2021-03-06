$(document).ready(function() {
    const data = [
        {data:'check', name:'check', orderable:false, searchable:false},
        {data:'menu_id', name:'menu_id', orderable:false,},
        {data:'name', name:'name'},
        {data:'comments', name:'action', orderable:false},
        {data:'created_by', name:'created_by', className:'align-top'},
        {data:'status', name:'status', },
        {data:'btn', name:'btn', searchable:false, orderable:false},
    ];

    Table({table:'#table', data:data, url:'/api/v1/preferences/submenu'});

    $('#insert').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            url:'/api/v1/submenu/insert',
            data:new FormData(this),
            type:'POST',
            contentType:false,
            processData:false,
            headers:{
                'X-CSRF-TOKEN' : csrftoken
            },
            success:res=>{
                SweetAlert(res)
                RefreshTable('table')
            },
            error:err=>console.log(err)
        })
    })

    $('#table').on('click', '#delete', function (e) {
        e.preventDefault();
        let value = $(this).data('value')
        SweetQuestions({
            title : 'Apakah anda yakin?',
            subtitle : 'Apakah anda ingin menghapus data section ini?',
            buttonConfirm : 'Yes',
            buttonDeny: 'No',
            confirm : 'ajax',
            deny : {
                icon:'error',
                title : 'Gagal menghapus'
            },
            ajax : {
                url:'/api/v1/section/delete',
                data:{
                    value : value
                },
                type:'DELETE',
                headers:{
                    'X-CSRF-TOKEN' : csrftoken
                },
                success:res=>{
                    SweetAlert(res)
                    RefreshTable('table')
                    value_checkbox = []
                },
                error:err=>{
                    SweetAlert({status:'error', message:err.responseJSON.message})
                    value_checkbox = []
                }
            }
        })
    })

    $('#deleteArray').on('click', function (e) {
        e.preventDefault();
        if (value_checkbox.length < 1) {
            Swal.fire('Perhatian', 'Pilih salah satu!','warning')
            return 0;
        }
        SweetQuestions({
            title : 'Apakah anda yakin?',
            subtitle : 'Apakah anda ingin menghapus data submenu ini?',
            buttonConfirm : 'Yes',
            buttonDeny: 'No',
            confirm : 'ajax',
            deny : {
                icon:'error',
                title : 'Gagal menghapus'
            },
            ajax : {
                url:'/api/v1/submenu/delete',
                data:{
                    value : value_checkbox
                },
                type:'DELETE',
                headers:{
                    'X-CSRF-TOKEN' : csrftoken
                },
                success:res=>{
                    SweetAlert(res)
                    RefreshTable('table')
                    value_checkbox = []
                },
                error:err=>{
                    SweetAlert({status:'error', message:err.responseJSON.message})
                    value_checkbox = []
                }
            }
        })
    })

    $('#table').on('click', '#edit', function (e) {
        e.preventDefault();
        let value = $(this).data('value')
        $.ajax({
            url:'/api/v1/submenu/get/'+value,
            type:'GET',
            success:res=>{
                $('#updateSubmenu input[name="name"]').val(res.data.name);
                $('#updateSubmenu input[name="name"]').data('id',res.data.id);
                $('#updateSubmenu input[name="url"]').val(res.data.url);
                $('#updateSubmenu select[name="type"] option[value="'+res.data.type+'"]').attr('selected', true);
                $('#updateSubmenu select[name="menu_id"] option[value="'+res.data.menu_id+'"]').attr('selected', true);
                $('#updateSubmenu textarea[name="comments"]').val(res.data.comments);
                $('#updateSubmenu').modal('show');
            },
            error:err=>console.log(err)
        })
    })

    $('#update').on('submit', function(e) {
        e.preventDefault();
        let value = new FormData(this)
        value.append('id', $('#updateSubmenu input[name="name"]').data('id'));
        $.ajax({
            url:'/api/v1/submenu/update',
            data:value,
            type:'POST',
            contentType:false,
            processData:false,
            headers:{
                'X-CSRF-TOKEN' : csrftoken
            },
            success:res=>{
                SweetAlert(res)
                RefreshTable('table')
            },
            error:err=>console.log(err)
        })
    })

    $('#table').on('change', '.input-toggle', function() {
        $.ajax({
            url:'/api/v1/submenu/status/update',
            data:{
                status:$(this).prop('checked') == true ? 1 : 0,
                id:$(this).data('value'),
            },
            type:'PUT',
            headers:{
                'X-CSRF-TOKEN' : csrftoken
            },
            success:res=>{
                SweetAlert(res)
                RefreshTable('table')
            },
            error:err=>console.log(err)
        })
    })

})

