"use client"
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileDropInput: React.FC = () => {
  const [isDragActive, setIsDragActive] = useState(false);

  const onDrop = useCallback(() => {
    setIsDragActive(false);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className={`flex items-center gap-6 w-full font-light p-3 border-2 border-dashed rounded-[12px] transition-all ${
        isDragActive ? 'border-white' : 'border-inactive'
      } cursor-pointer`}
    >
      <input {...getInputProps()} />
      <button
        type="button"
        className="justify-center p-3 rounded-[12px] border-2 border-inactive leading-[18px]"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector<HTMLInputElement>('input[type="file"]')?.click();
        }}
      >
        Прикрепить файл
      </button>
      <p>Перетащите сюда файл</p>
    </div>
  );
};

export default FileDropInput;
