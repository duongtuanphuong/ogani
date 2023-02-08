package com.example.ogani.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.ogani.entity.Tag;
import com.example.ogani.model.response.MessageResponse;
import com.example.ogani.service.TagService;

import io.swagger.v3.oas.annotations.Operation;

import com.example.ogani.model.request.CreateTagRequest;

@RestController
@RequestMapping("/api/tag")
@CrossOrigin(origins = "*",maxAge = 3600)
public class TagController {

    @Autowired
    private TagService tagService;

    @GetMapping("/")
    @Operation(summary="Lấy ra danh sách nhãn")
    public ResponseEntity<List<Tag>> getList(){
        
        List<Tag> list = tagService.getListTag();

        return ResponseEntity.ok(list);
    }

    @PostMapping("/create")
    @Operation(summary="Tạo mới nhãn")
    public ResponseEntity<Tag> createTag(@RequestBody CreateTagRequest request){
        Tag tag = tagService.createTag(request);
        return ResponseEntity.ok(tag);
    }

    @PutMapping("/update/{id}")
    @Operation(summary="Tìm nhãn bằng id và cập nhật nó")
    public ResponseEntity<Tag> updateTag(@PathVariable long id,@RequestBody CreateTagRequest request){
        Tag tag = tagService.updateTag(id, request);

        return ResponseEntity.ok(tag);
    }
    @PutMapping("/enable/{id}")
    @Operation(summary="Kích hoạt nhãn bằng id")
    public ResponseEntity<?> enabled(@PathVariable long id){
        tagService.enableTag(id);
        return ResponseEntity.ok(new MessageResponse("Enable tag success"));

    }

    @DeleteMapping("/delete/{id}")
    @Operation(summary="Xóa nhãn bằng id")
    public ResponseEntity<?> deleteTag(@PathVariable long id){
        tagService.deleleTag(id);

        return ResponseEntity.ok(new MessageResponse("Delete tag success"));

    }
    
}
