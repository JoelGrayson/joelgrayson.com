import Button from "@jcomponents/button";
import Image from "next/image";

const attributes={
    w2: 'col-span-2',
    h2: 'row-span-2',
    notClickable: 'not clickable'
};

// Image path in /public/image/art/

const memes=[ //image path is {description}.jpg
    // if it is an element, it will be rendered. If it is a string, it will be rendered as an image
    '2024 College Process.gif',
    <div className="p-3 grid place-items-center" key='confucian-matrix'>
        <Image src="/image/memes/2023 Confucian Matrix.jpg" alt="Confucian Matrix" width={160} height={160} />
        <p>Confucian Matrix</p>
    </div>,
    [<div className='p-2 grid place-items-center"' key='president-chess-board'>
        <Image src="/image/memes/2023 Presidential Chess Board.jpg" alt="Presidential Chessboard" width={400} height={400} className="mx-auto" />
        <p className='text-center bold mt-5'>
          Hidden Meaning
        </p>
        <ul>
            <li>Known as King Jackson, Andrew Jackson is the king as an expander of the executive branch&apos;s power.</li>
            <li>Edith Wilson is the queen because she served presidential duties during Wilson&apos;s presidency.</li>
            <li>JFK is the bishop because he is Catholic.</li>
            <li>Theodore Roosevelt is the knight because he bravely rode a horse in the Battle of San Juan, owned horses, and responded &ldquo;The Roosevelts are horse people&rdquo; when offered a car.</li>
            <li>FDR is the rook because he said &ldquo;Lead them straight and true,&rdquo; like a rook moves.</li>
            <li>Bush is the pawn because the Bushes have been in politics forever.</li>
        </ul>
    </div>, attributes.h2, attributes.w2],
    [<div className="p-5 grid place-items-center" key='select-your-gender'>
        <div>
            <div>Select your gender</div>
            <div>
                <label htmlFor='male'>Male</label>
                <input type="radio" name="gender" id='male' />
            </div>
            <div>
                <label htmlFor='female'>Female</label>
                <input type="radio" name="gender" id='female' />
            </div>
            <div>
                <label htmlFor='gmail'>Gmail</label>
                <input type="radio" name="gender" id='gmail' />
            </div>
            <Button>Submit</Button>
        </div>
    </div>, attributes.notClickable],
    '2023 So borane.jpg',
    '2022 Horizontal Shiff.jpg',
    '2021 Backslash Meme.jpg',

    // [ '2021 Tall.jpg', h2 ],
    // [ '2021 Wide.jpg', w2 ],
];

export default memes;
