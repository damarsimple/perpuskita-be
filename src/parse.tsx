import * as fs from "fs";
import { PrismaClient } from '@prisma/client';

interface BookData{
    image: string,
    name:  string,
    author:  string,
    format:  string,
    book_depository_stars: string,
    price:  string,
    currency:  string,
    old_price:  string,
    isbn:  string,
    category:  string,
    img_paths:  string,
  }

export async function main() {
    //   const files = await fg("**/*.ts")
    const d = fs.readFileSync("archive/main_dataset.tsv", "utf8").split("\n")

    const headers = d[0].split("\t") as unknown as keyof BookData[]

    const data = d.slice(1).map(d => d.split("\t"))

    const dd: BookData[] = [];

    for (const d of data) {
        const obj: Partial<BookData> = {};
        //@ts-ignore
        for (let i = 0; i < headers.length; i++) {
            obj[headers[i]] = d[i];
        }
        dd.push(obj as BookData);
    }

    const categoryMap : Record<string,number> = {}

    const authorMap: Record<string, number> = {}
    
    const prisma = await new PrismaClient()

    for (const book of dd) {

        if (!categoryMap[book.category]) {
            const cat = await prisma.category.create({
                data: {
                    name: book.category
                }
            })

            categoryMap[book.category] = cat.id
        }

        if (!authorMap[book.author]) {
            const author = await prisma.author.create({
                data: {
                    name: book.author
                }
            })

            authorMap[book.author] = author.id
        }

        const authorId = authorMap[book.author]
        const categoryId = categoryMap[book.category]

        await prisma.book.create({
            data: {
                title: book.name ?? "A book with no name",
                cover: book.image,
                price: isNaN(parseInt(book.price)) ? 1000 : parseInt(book.price),
                authorId,
                categories: {
                    connect: {
                        id: categoryId
                    }
                }
            }
        })

        console.log(`${book.name} created`);
        
    }
    console.log("done");
    

}

main()