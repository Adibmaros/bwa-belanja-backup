import React, { useState, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { X } from 'lucide-react';

const UploudImage = () => {
    const [images, setImages] = useState([]);
    const fileInputRef = useRef(null);

    const handleImageUpload = (e) => {
        const files = e.target.files;
        if (files) {
            const newImages = [];
            for (let i = 0; i < files.length; i++) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    newImages.push(reader.result);
                    if (newImages.length === files.length) {
                        setImages((prevImages) => [...prevImages, ...newImages]);
                    }
                };
                reader.readAsDataURL(files[i]);
            }
        }
    };

    const removeImage = (indexToRemove) => {
        setImages((prevImages) => prevImages.filter((_, index) => index !== indexToRemove));
        
        // Reset file input
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Product Media</CardTitle>
                <CardDescription>Upload product images</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="images" className="text-gray-400">Product Images</Label>
                    <Input 
                        ref={fileInputRef}
                        type="file" 
                        id="images" 
                        name="images" 
                        multiple 
                        accept="image/*" 
                        onChange={handleImageUpload}
                        className="cursor-pointer border-solid border-2 border-gray-400 p-1.5 hover:border-blue-500 transition-colors"
                    />
                    
                    {/* Image Preview Grid */}
                    {images.length > 0 && (
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                            {images.map((image, index) => (
                                <div key={index} className="relative group">
                                    <img 
                                        src={image} 
                                        alt={`Product preview ${index + 1}`} 
                                        className="w-full h-32 object-cover rounded-lg"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeImage(index)}
                                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default UploudImage;
