package com.example.ogani.service;

import java.util.List;

import com.example.ogani.entity.Tag;
import com.example.ogani.model.request.CreateTagRequest;

public interface TagService {
    
    List<Tag> getListTag();

    Tag createTag(CreateTagRequest request);

    Tag updateTag(long id,CreateTagRequest request);

    void enableTag(long id);

    void deleleTag(long id);

}
