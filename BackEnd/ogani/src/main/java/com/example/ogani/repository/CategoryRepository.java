package com.example.ogani.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.ogani.entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long> {
    
    @Query("Select c from Category c where c.enable = true")
    List<Category> findALLByEnabled();
}
