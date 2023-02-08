package com.example.ogani.model.request;

import java.util.Set;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateProductRequest {
    
    @NotNull(message = "Tên sản phẩm rỗng")
    @NotEmpty(message="Tên sản phẩm rỗng")
    @Schema(description = "Tên sản phẩm",example="Product1",required=true)
    @Size(min=5,max=50,message="Tên sản phẩm từ 3-50 ký tự")
    private String name;

    @NotNull(message = "Mô tả rỗng")
    @NotEmpty(message="Mô tả rỗng")
    @Schema(description = "Mô tả sản phẩm",example="Đây là sản phẩm thứ 1")
    @Size(min=5,max=1000,message="Mô tả sản phẩm từ 5-1000 ký tự")
    private String description;

    @NotNull(message = "Giá tiền rỗng")
    @NotEmpty(message = "Giá tiền rỗng")
    @Schema(description = "Giá sản phẩm",example = "12")
    @Size(min=0,message="Giá tiền sản phẩm lớn hơn 0")
    private long price;

    @NotNull(message = "Số lượng sản phẩm")
    @NotEmpty(message="Số lượng sản phẩm")
    @Schema(description = "Số lượng sản phẩm",example="12")
    @Size(min=0,message="Số lượng sản phẩm từ 0")
    private int quantity;

    @NotNull(message = "Danh mục rỗng")
    @NotEmpty(message = "Danh mục rỗng")
    @Schema(description = "ID của danh mục",example="1")
    private long categoryId;

    @NotNull(message="Ảnh sản phẩm rỗng")
    @Schema(description="Mảng Id của hình ảnh",example="[1,2,3]")
    private Set<Long> imageIds;
}
