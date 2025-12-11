import React from "react";
import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
    quantity: number;
    setQuantity: (newQuantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
    quantity,
    setQuantity,
}) => {
    const handleIncrease = () => setQuantity(quantity + 1);

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);

        // Chỉ update nếu value hợp lệ
        if (!isNaN(value) && value >= 1) {
            setQuantity(value);
        }
    };

    const handleBlur = () => {
        // Nếu trống, NaN hoặc < 1 → reset về 1
        if (!quantity || isNaN(quantity) || quantity < 1) {
            setQuantity(1);
        }
    };

    return (
        <div className="flex flex-row items-center gap-2">
            <label className="font-semibold text-sm text-gray-500">Số lượng:</label>

            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                {/* Decrease Button */}
                <button
                    onClick={handleDecrease}
                    disabled={quantity <= 1}
                    className={`p-1 transition-colors ${quantity <= 1
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                >
                    <Minus size={12} />
                </button>

                {/* Input */}
                <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className="w-12 h-full text-center text-sm font-medium text-gray-500 border-x border-gray-300 focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />

                {/* Increase Button */}
                <button
                    onClick={handleIncrease}
                    className="p-1 text-gray-600 hover:bg-gray-100 transition-colors"
                >
                    <Plus size={12} />
                </button>
            </div>
        </div>
    );
};

export default QuantitySelector;
