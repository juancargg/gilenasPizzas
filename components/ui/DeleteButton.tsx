'use client';

import { deleteProduct } from '@/actions/eliminate-product';
import React from 'react';
import { toast } from 'react-toastify';

interface DeleteButtonProps {
    productId: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ productId }) => {
    const handleDelete = async () => {
        const result = await deleteProduct(productId);
        if (result?.errors) {
            toast.error("No se ha podido borrar el producto");
        } else {
            toast.success("Producto borrado")
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
