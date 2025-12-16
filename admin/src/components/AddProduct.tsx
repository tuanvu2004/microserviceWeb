"use client";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useForm, SubmitHandler, useFieldArray, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus, Trash2 } from "lucide-react";

const FeatureSchema = z.object({
  key: z.string().min(1, { message: "Tên tính năng không được bỏ trống." }),
  value: z.string().min(1, { message: "Giá trị không được bỏ trống." }),
});

const formSchema = z.object({
  name: z.string().min(1, { message: "Tên sản phẩm không được bỏ trống!" }).max(255, { message: "Tên sản phẩm quá dài." }),
  price: z.coerce.number({ invalid_type_error: "Giá sản phẩm phải là số." }).min(0, { message: "Giá phải lớn hơn hoặc bằng 0." }),
  compareAtPrice: z.coerce.number({ invalid_type_error: "Giá so sánh phải là số." }).min(0, { message: "Giá so sánh phải lớn hơn hoặc bằng 0." }).optional().nullable(),
  code: z.string().min(1, { message: "Mã sản phẩm không được bỏ trống!" }).max(50, { message: "Mã sản phẩm quá dài." }),
  description: z.string().min(1, { message: "Mô tả sản phẩm không được bỏ trống!" }).max(2000, { message: "Mô tả sản phẩm quá dài." }),
  images: z.object({
    main: z.string().url({ message: "URL ảnh chính không hợp lệ." }).min(1, { message: "Ảnh chính không được bỏ trống." }),
    gallery: z.array(z.string().url({ message: "URL ảnh thư viện không hợp lệ." })).optional(),
  }),
  features: z.array(FeatureSchema).optional(),
});

type ProductFormValues = z.infer<typeof formSchema>;

const FeatureFieldArray = ({ control }: { control: any }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "features" as never,
  });

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-2 items-center">
          {/* (Key) */}
          <FormField
            control={control}
            name={`features.${index}.key`}
            render={({ field: keyField }) => (
              <FormItem className="flex-1">
                <FormLabel className={index === 0 ? "block" : "sr-only"}>Tên thuộc tính</FormLabel>
                <FormControl>
                  <Input placeholder="Ví dụ: Công suất" {...keyField} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* (Value) */}
          <FormField
            control={control}
            name={`features.${index}.value`}
            render={({ field: valueField }) => (
              <FormItem className="flex-1">
                <FormLabel className={index === 0 ? "block" : "sr-only"}>Giá trị</FormLabel>
                <FormControl>
                  <Input placeholder="Ví dụ: 2000W" {...valueField} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Nút Xóa */}
          <Button
            type="button"
            variant="destructive"
            size="icon"
            onClick={() => remove(index)}
            className="mt-5.5 shrink-0"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}

      {/* Nút Thêm */}
      {fields.length > 0 && (
        <Button
          type="button"
          variant="outline"
          className="w-full justify-center mt-4 border-dashed"
          onClick={() => append({ key: "", value: "" })}
        >
          <Plus className="h-4 w-4 mr-2" />
          Thêm thuộc tính khác
        </Button>
      )}
      {fields.length === 0 && (
        <Button
          type="button"
          variant="outline"
          className="w-full justify-center mt-4"
          onClick={() => append({ key: "", value: "" })}
        >
          <Plus className="h-4 w-4 mr-2" />
          Thêm thuộc tính đầu tiên
        </Button>
      )}
    </div>
  );
};

// --- COMPONENT CHÍNH ---
const AddProduct = () => {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: 0,
      compareAtPrice: undefined,
      code: "",
      description: "",
      images: {
        main: "",
        gallery: [],
      },
      features: [],
    },
  });

  const onSubmit: SubmitHandler<ProductFormValues> = (data) => {
    const featuresObject = (data.features || []).reduce((acc, item) => {
      if (item.key && item.value) {
        acc[item.key] = item.value;
      }
      return acc;
    }, {} as Record<string, string>);

    const finalProductData = {
      ...data,
      features: featuresObject
    };

    console.log("Dữ liệu sản phẩm đã Submit (Đã xử lý Features)");
    console.log(finalProductData);
    alert("Thêm sản phẩm thành công! (Kiểm tra console log)");
  }

  return (
    <SheetContent
      className="overflow-y-auto w-full md:max-w-xl lg:max-w-2xl sm:p-6 md:p-8"
      side="right" >
      <SheetHeader className="text-left">
        <SheetTitle>Thêm Sản Phẩm Mới</SheetTitle>
      </SheetHeader>
      <SheetDescription asChild>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên Sản Phẩm</FormLabel>
                  <FormControl>
                    <Input placeholder="Áo thun cơ bản" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mã Sản Phẩm</FormLabel>
                  <FormControl>
                    <Input placeholder="ATCB-001" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex space-x-4">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Giá Bán ($)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="100000"
                        {...field}
                        onChange={e => field.onChange(e.target.valueAsNumber)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="compareAtPrice"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Giá So Sánh (Giá gốc)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="150000 (Tùy chọn)"
                        {...field}
                        onChange={e => field.onChange(e.target.valueAsNumber || (e.target.value === "" ? undefined : field.value))}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mô Tả Sản Phẩm</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Nhập mô tả chi tiết sản phẩm..."
                      className="resize-none flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="images.main"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL Ảnh Chính</FormLabel>
                  <FormControl>
                    <Input placeholder="https://anhchinh.jpg" {...field} />
                  </FormControl>
                  <FormDescription>
                    Đây là ảnh đại diện hiển thị đầu tiên của sản phẩm (bắt buộc).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-2 pt-2">
              <FormLabel>Tính Năng Sản Phẩm (Features)</FormLabel>
              <FormDescription>
                Thêm tên thuộc tính và giá trị tương ứng 
              </FormDescription>
              <FeatureFieldArray control={form.control} />
            </div>

            <Button type="submit" className="w-full">
              Thêm Sản Phẩm
            </Button>
          </form>
        </Form>
      </SheetDescription>
    </SheetContent>
  );
};

export default AddProduct;