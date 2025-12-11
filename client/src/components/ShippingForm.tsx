import { useForm, SubmitHandler } from "react-hook-form"
import { ShippingFormInputs, shippingFormSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./Input";
import React, { forwardRef, useImperativeHandle } from "react";

export interface ShippingFormRef {
    submitForm: () => void;
}

interface ShippingFormProps {
    onNextStep: (data: ShippingFormInputs) => void;
}

const ShippingForm = forwardRef<ShippingFormRef, ShippingFormProps>(({ onNextStep }, ref) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ShippingFormInputs>({
        resolver: zodResolver(shippingFormSchema),
    });

    const onSubmit: SubmitHandler<ShippingFormInputs> = (data) => {
        console.log("Dữ liệu gửi hàng hợp lệ:", data);
        onNextStep(data);
    };

    useImperativeHandle(ref, () => ({
        submitForm: handleSubmit(onSubmit)
    }));

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 text-left p-2" id="shipping-form">

            {/* HỌ VÀ TÊN */}
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-xs text-gray-500 font-bold">Họ và Tên:</label>
                <Input
                    type="text"
                    id="name"
                    placeholder="Vũ Anh Tuấn"
                    {...register("name")}
                />
                {errors.name && (
                    <p className="text-xs text-red-500">{errors.name.message}</p>
                )}
            </div>

            {/* EMAIL */}
            {/* <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-xs text-gray-500 font-bold">Email:</label>
                <Input
                    type="email"
                    id="email"
                    placeholder="tuanvu@gmail.com"
                    {...register("email")}
                />
                {errors.email && (
                    <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
            </div> */}

            {/* SỐ ĐIỆN THOẠI */}
            <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-xs text-gray-500 font-bold">Số điện thoại:</label>
                <Input
                    type="tel"
                    id="phone"
                    placeholder="0378901010"
                    {...register("phone")}
                />
                {errors.phone && (
                    <p className="text-xs text-red-500">{errors.phone.message}</p>
                )}
            </div>

            {/* ĐỊA CHỈ */}
            <div className="flex flex-col gap-1">
                <label htmlFor="address" className="text-xs text-gray-500 font-bold">Địa chỉ:</label>
                <Input
                    type="text"
                    id="address"
                    placeholder="116 tổ 13 Kiến Hưng, Hà Đông, Hà Nội"
                    {...register("address")}
                />
                {errors.address && (
                    <p className="text-xs text-red-500">{errors.address.message}</p>
                )}
            </div>

        </form>
    );
});
ShippingForm.displayName = "ShippingForm";

export default ShippingForm;