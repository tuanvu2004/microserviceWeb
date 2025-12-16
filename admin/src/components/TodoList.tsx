"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar"

// Dữ liệu mẫu (Mock data) cho danh sách công việc
const mockTodos = [
  { id: 1, text: "Hoàn thành báo cáo phân tích thị trường.", checked: true },
  { id: 2, text: "Lên kế hoạch nội dung cho tuần tới.", checked: true },
  { id: 3, text: "Thiết lập cuộc họp với đội ngũ thiết kế.", checked: false },
  { id: 4, text: "Kiểm tra lại kho hàng và cập nhật số lượng tồn.", checked: false },
  { id: 5, text: "Gửi email xác nhận đơn hàng cho khách hàng VIP.", checked: false },
  { id: 6, text: "Nghiên cứu xu hướng thiết kế nội thất mới nhất.", checked: false },
  { id: 7, text: "Cập nhật hồ sơ nhân viên mới.", checked: false },
  { id: 8, text: "Lập danh sách các nhà cung cấp tiềm năng.", checked: false },
  { id: 9, text: "Xem lại hiệu suất quảng cáo quý trước.", checked: true },
  { id: 10, text: "Sắp xếp lại tài liệu dự án trên Google Drive.", checked: true },
];

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  // Sử dụng state để quản lý trạng thái có thể thay đổi của danh sách công việc
  const [todos, setTodos] = useState(mockTodos);

  // Hàm xử lý chuyển đổi trạng thái Checkbox
  const handleToggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        // Tìm item bằng ID và đảo ngược thuộc tính 'checked'
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>

      {/* Date Picker Popover */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            {/* Đã thêm className cho CalendarIcon để căn chỉnh tốt hơn */}
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>

      {/* Todo List Scroll Area */}
      <ScrollArea className="max-h-100 mt-4 overflow-y-auto">
        <div className="flex flex-col gap-3">
          {todos.map((item) => (
            <Card key={item.id} className="p-4">
              <div
                className="flex items-start gap-4 cursor-pointer"
                onClick={() => handleToggleTodo(item.id)}
              >
                <Checkbox
                  id={`todo-${item.id}`}
                  checked={item.checked}
                />
                <label
                  htmlFor={`todo-${item.id}`}
                  className={`text-sm leading-snug font-medium transition-colors ${item.checked ? "text-muted-foreground line-through" : "text-foreground"
                    }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.text}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;