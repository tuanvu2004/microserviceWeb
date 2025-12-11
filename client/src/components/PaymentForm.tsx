// src/components/PaymentForm.tsx

import React from 'react';
import { ShippingFormInputs } from '@/src/types';
import { AlertTriangle, MapPin, DollarSign, Repeat, QrCode } from 'lucide-react'; 

type PaymentMethodType = 'cod' | 'bank'; 

interface PaymentFormProps {
    shippingData: ShippingFormInputs | null; 
    totalAmount: number; 
    selectedMethod: PaymentMethodType; 
    onMethodChange: (method: PaymentMethodType) => void; 
}

const PaymentForm: React.FC<PaymentFormProps> = ({ 
    shippingData, 
    selectedMethod, 
    onMethodChange 
}) => {
    
    const handleMethodChange = (method: PaymentMethodType) => {
        onMethodChange(method);
    };

    interface PaymentOptionProps {
        method: PaymentMethodType;
        title: string;
        description: string;
        Icon: React.ElementType; 
    }
    
    const PaymentOption: React.FC<PaymentOptionProps> = ({ method, title, description, Icon }) => {
        const isSelected = selectedMethod === method;
        return (
            <label 
                className={`flex items-start gap-4 p-4 border rounded-xl cursor-pointer transition-colors duration-200 
                             ${isSelected ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-gray-200 hover:bg-gray-50'}`}
                onClick={() => handleMethodChange(method)}
            >
                <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={isSelected}
                    onChange={() => handleMethodChange(method)}
                    className="form-radio mt-1.5 h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <div className="flex flex-col grow"> 
                    <div className='flex items-center gap-2'>
                        <Icon className='w-5 h-5 text-gray-700' />
                        <span className="font-bold text-base">{title}</span>
                    </div>
                    <span className="text-sm text-gray-500 mt-1">{description}</span>
                </div>
            </label>
        );
    }


    return (
        <div className="flex flex-col gap-8 text-left p-2">
            
            {/*  THÔNG TIN ĐƠN HÀNG */}
            <div className="border p-4 rounded-xl bg-gray-50 shadow-inner">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-gray-800">
                    <MapPin className='w-5 h-5 text-red-500'/> Địa chỉ nhận hàng
                </h3>
                {shippingData ? (
                    <div className='text-sm'>
                        <p>
                            <span className='font-semibold'>{shippingData.name}</span>
                             SĐT: {shippingData.phone}
                        </p>
                        <p className="text-gray-600 mt-1">
                            {shippingData.address}
                        </p>
                    </div>
                ) : (
                    <div className="flex items-start gap-3 p-3 border border-red-300 rounded-lg bg-red-100 text-red-700">
                        <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                        <p className="font-medium text-sm">
                            Lỗi: Không tìm thấy dữ liệu giao hàng. Vui lòng quay lại bước *Địa chỉ giao hàng* để xác nhận thông tin.
                        </p>
                    </div>
                )}
            </div>

            {/* PHƯƠNG THỨC THANH TOÁN */}
            <div>
                <h3 className="font-bold text-xl mb-4 text-gray-800">Chọn phương thức thanh toán</h3>
                <div className="flex flex-col gap-4">
                    
                    <PaymentOption
                        method="cod"
                        title="Thanh toán khi nhận hàng (COD)"
                        description="Thanh toán bằng tiền mặt trực tiếp cho nhân viên giao hàng."
                        Icon={DollarSign}
                    />

                    <PaymentOption
                        method="bank"
                        title="Chuyển khoản Ngân hàng"
                        description="Chuyển khoản trực tiếp. Chi tiết tài khoản sẽ hiển thị ở cột chi phí."
                        Icon={Repeat}
                    />
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;