// components/DeleteButton.tsx
'use client';

import { deleteProduct } from '@/actions/eliminate-product';
import React from 'react';

interface DeleteButtonProps {
    productId: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ productId }) => {
    const handleDelete = async () => {
        const result = await deleteProduct(productId);
        if (result?.errors) {
            console.error(result.errors);
        } else {
            // Recargar la página para ver los cambios
            window.location.reload();
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="text-red-600 hover:text-red-800"
        >
            Eliminar
        </button>
    );
};

export default DeleteButton;
