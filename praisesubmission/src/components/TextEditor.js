'use client'
import TextAlign from '@tiptap/extension-text-align';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from 'next/image';
import { useState } from 'react';

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
        StarterKit,
        TextAlign.configure({
            alignments: ['left', 'center', 'right', 'justify'],
        })
    ],
    content: '<p>Input text</p>',
    editorProps: {
        attributes: {
          class: 'p-2 focus:outline-none focus:ring-0 resize-none min-h-[100px] overflow-auto w-full w-[510px]',
          immediatelyRender: 'false',
        },
    },
  });

  const [activeButtons, setActiveButtons] = useState({
    bold: false,
    italic: false,
    left: false,
    right: false,
    center: false,
    justify: false,
    blockquote: false,
  });

  const toggleButton = (button) => {
    setActiveButtons((prev) => ({
      ...prev,
      [button]: !prev[button],
    }));
  };

  return (
    <div className="max-w-md tablet:max-w-xl laptop:max-w-md min-w-full  mx-auto flex flex-col border border-[#1F0954] rounded-md relative min-h-44 h-auto">
      <div className="flex items-center justify-center">
        <div className="grow flex gap-3 items-center justify-center h-8 px-3 border-b border-r border-[#1F0954] rounded-sm">
          <Image src={'/icons/document.png'} alt="document icon" width={1000} height={1000} className="object-contain size-6" />
          <Image src={'/icons/arrowdown.png'} alt="arrow icon" width={100} height={100} className="object-contain size-3" />
        </div>
        <div className="grow flex gap-2 items-center justify-between border-b border-l h-8 px-2 border-[#1F0954] rounded-sm">
          {editor && (
            <>
                <button>
                    <Image
                    src={"/icons/text.png"}
                    alt="text icon"
                    width={16}
                    height={16}
                    className="object-contain w-4 h-4"
                    />
                </button>

                <button 
                    onClick={() => {
                        editor.chain().focus().toggleBold().run();
                        toggleButton('bold');
                        }}
                    className={`flex items-center justify-center ${activeButtons.bold ? 'bg-gray-300 p-1 rounded-sm' : ''}`} 
                >
                    <Image 
                        src={'/icons/text-bold.png'} 
                        alt="text bold icon" 
                        width={16} 
                        height={16} 
                        className='object-contain w-4 h-4'
                    />
                </button>

                <button 
                    onClick={() => {
                        editor.chain().focus().toggleItalic().run();
                        toggleButton('italic');
                        }}
                    className={`flex items-center justify-center ${activeButtons.italic ? 'bg-gray-300 p-1 rounded-sm' : ''}`} 
                >
                    <Image 
                        src={'/icons/text-italic.png'} 
                        alt="text italic icon"
                        width={16} 
                        height={16} 
                        className='object-contain w-4 h-4'
                    />
                </button>

                <button>
                    <Image
                    src={"/icons/smallcaps.png"}
                    alt="smallcaps icon"
                    width={16}
                    height={16}
                    className="object-contain w-4 h-4"
                    />
                </button>

                <button 
                    onClick={() => {
                        editor.commands.setTextAlign('left')
                        toggleButton('left');
                    }}
                    className={`flex items-center justify-center ${activeButtons.left ? 'bg-gray-300 p-1 rounded-sm' : ''}`} 
                >
                    <Image 
                        src={'/icons/textalign-left.png'} 
                        alt="textalign-left icon" 
                        width={16} 
                        height={16} 
                        className='object-contain w-4 h-4'
                    />
                </button>

                <button 
                    onClick={() => {
                        editor.commands.setTextAlign('right')
                        toggleButton('right');
                    }}
                    className={`flex items-center justify-center ${activeButtons.right ? 'bg-gray-300 p-1 rounded-sm' : ''}`} 
                >
                    <Image 
                        src={'/icons/textalign-right.svg'} 
                        alt="textalign-right icon"
                        width={16} 
                        height={16} 
                        className='object-contain w-4 h-4'
                    />
                </button>

                <button 
                    onClick={() => {
                        editor.commands.setTextAlign('center')
                        toggleButton('center');
                    }}
                    className={`flex items-center justify-center ${activeButtons.center ? 'bg-gray-300 p-1 rounded-sm' : ''}`} 
                >
                    <Image 
                        src={'/icons/textalign-center.png'} 
                        alt="textalign-center icon" 
                        width={16} 
                        height={16} 
                        className='object-contain w-4 h-4'
                    />
                </button>

                <button 
                    onClick={() => {
                        editor.commands.setTextAlign('justify')
                        toggleButton('justify');
                    }}
                    className={`flex items-center justify-center ${activeButtons.justify ? 'bg-gray-300 p-1 rounded-sm' : ''}`} 
                >
                    <Image 
                        src={'/icons/textalign-justifycenter.png'} 
                        alt="textalign-justify icon" 
                        width={16} 
                        height={16} 
                        className='object-contain w-4 h-4'
                    />
                </button>

                <button>
                    <Image
                    src={"/icons/task.png"}
                    alt="task icon"
                    width={16}
                    height={16}
                    className="object-contain w-4 h-4"
                    />
                </button>

                <button
                    onClick={() => {
                        editor.chain().focus().toggleBlockquote().run();
                        toggleButton('blockquote');
                    }}
                    className={`flex items-center justify-center ${activeButtons.blockquote ? 'bg-gray-300 p-1 rounded-sm' : ''}`} 
                >
                    <Image
                    src={"/icons/quote-up.png"}
                    alt="quote up icon"
                    width={16}
                    height={16}
                    className="object-contain w-4 h-4"
                    />
                </button>

                <button>
                    <Image
                    src={"/icons/quote-down.png"}
                    alt="quote down icon"
                    width={16}
                    height={16}
                    className="object-contain w-4 h-4"
                    />
                </button>

                <button>
                    <Image
                    src={"/icons/math.png"}
                    alt="math icon"
                    width={16}
                    height={16}
                    className="object-contain w-4 h-4"
                    />
                </button>

                <button>
                    <Image
                    src={"/icons/gallery.png"}
                    alt="gallery icon"
                    width={16}
                    height={16}
                    className="object-contain w-4 h-4"
                    />
                </button>

                <button>
                    <Image
                    src={"/icons/link-2.png"}
                    alt="link icon"
                    width={16}
                    height={16}
                    className="object-contain w-4 h-4"
                    />
                </button>
            </>
          )}
        </div>
      </div>

        <div className='flex flex-col gap-1'>
            {editor && <EditorContent editor={editor} />}

            <div className='p-2'>
                <button className="z-10 flex gap-1 bg-[#A100FF21] p-2 rounded-lg items-center justify-center">
                    <Image src={'/icons/quill-pen.png'} alt="quillpen icon" width={100} height={100} className="object-contain size-4" />
                    <span className='font-medium text-xs text-[#8C00E3]'>Write with May</span>
                </button>
            </div>
        </div>
    </div>
  );
};

export default TextEditor;