import { Spacing } from '@/components/common/Spacing';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { useState, ChangeEvent, DragEvent } from 'react';

export function ChallengeUploadModal({ open, setOpen }: { open: boolean; setOpen: () => void }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="min-w-[39.5rem] h-fit px-9 py-12">
                <DialogHeader>
                    <DialogTitle className="text-2xl text-uiBlack">챌린지 인증하기</DialogTitle>
                </DialogHeader>
                <Spacing direction="vertical" size={10} />
                <div className="w-full min-h-64 h-fit max-h-96 rounded-md shadow-lg">
                    <DragAndDrop />
                </div>
                <Spacing direction="vertical" size={20} />
                <p className="text-[#464646] text-sm">인증을 완료하기까지 3-5일 걸릴 수 있습니다.</p>
                <Spacing direction="vertical" size={30} />
                <DialogFooter className="sm:justify-start">
                    <button className="bg-main w-full h-fit py-3 text-white text-lg rounded-lg">등록하기</button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

interface ImagePreview {
    file: File;
    preview: string;
}

export function DragAndDrop() {
    const [images, setImages] = useState<ImagePreview[]>([]);
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const handleDragOver = (e: DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (): void => {
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        setIsDragging(false);

        const files = Array.from(e.dataTransfer.files); // 드롭된 파일 가져오기
        const imageFiles = files.filter((file) => file.type.startsWith('image/'));

        const imagePreviews: ImagePreview[] = imageFiles.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
        }));

        setImages((prevImages) => [...prevImages, ...imagePreviews]);
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const files = e.target.files ? Array.from(e.target.files) : [];
        const imageFiles = files.filter((file) => file.type.startsWith('image/'));

        const imagePreviews: ImagePreview[] = imageFiles.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
        }));

        setImages((prevImages) => [...prevImages, ...imagePreviews]);
    };

    const removeImage = (index: number): void => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    return (
        <div className="size-full p-6 min-h-64">
            {images.length > 0 ? (
                <>
                    {images.map((image, index) => (
                        <div className="relative">
                            <div key={index} className="flex justify-center items-center">
                                <img src={image.preview} alt="Preview" className="w-auto h-full max-h-80 rounded-md" />
                            </div>
                            <button
                                onClick={() => removeImage(index)}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 text-xs"
                            >
                                <X size={9} />
                            </button>
                        </div>
                    ))}
                </>
            ) : (
                <div
                    className={`border-2 border-dashed rounded-lg text-center size-full min-h-64 flex justify-center items-center ${
                        isDragging ? 'border-blue-500 bg-blue-50' : 'border-[#929292] bg-[#EEEEEE]'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="file-upload"
                        onChange={handleFileChange}
                    />
                    <label className="cursor-pointer size-full flex justify-center items-center" htmlFor="file-upload">
                        드래그 앤 드롭하거나 이미지를 선택하세요.
                    </label>
                </div>
            )}
        </div>
    );
}
