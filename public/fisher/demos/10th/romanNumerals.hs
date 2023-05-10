{-
    Converts integer into roman numeral string representation
    4 => IX
    18 => XVIII
    314 => CCCXIV
    583 => DLXXXIII
    848 => DCCCXLVIII
    2022 => MMXXII

    Symbol    Value
    I          1
    V          5
    X          10
    L          50
    C          100
    D          500
    M          1000
-}

main :: IO ()
main=do
    print $ romanize 4
    print $ romanize 18
    print $ romanize 314
    print $ romanize 583
    print $ romanize 848
    print $ romanize 2022

jrepeat :: String -> Int -> String
jrepeat str n = concat $ replicate n str --repeats a character n times


romanize :: Int -> String
romanize n
    | n==0 = "" --base case
    | n>4999 || n<=0 = "Only accepts numbers in range 0-4999" --range limitation
    --thousands place
    | n>=1000 = jrepeat "M" (n `div` 1000)++romanize (n `mod` 1000) -- "M" for every thousand
    --hundreds place
    | n>=900 = "CM"++romanize (n-900) --special case
    | n>=500 = "D"++jrepeat "C" ((n-500) `div` 100)++romanize ((n-500) `mod` 100) -- "D" and "C" for every 100
    | n>=400 = "CD"++romanize (n-400) --special case
    | n>=100 = jrepeat "C" (n `div` 100)++romanize(n `mod` 100)
    -- tens place
    | n>=90 = "XC"++romanize(n-90) --special case
    | n>=50 = "L"++jrepeat "X" ((n-50) `div` 10)++romanize ((n-50) `mod` 10)
    | n>=40 = "XL"++romanize(n-40) --special case
    | n>=10 = jrepeat "X" (n `div` 10)++romanize(n `mod` 10)
    -- units place
    | n>=9 = "IX" --special case
    | n>=5 = "V"++jrepeat "I" (n-5)
    | n==4 = "IV" --special case
    | n<=3 && n>=1 = jrepeat "I" n
    | otherwise = ""
