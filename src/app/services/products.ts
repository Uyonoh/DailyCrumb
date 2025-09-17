interface ProductProps {
    slug?: string;
    img: string;
    name: string;
    brief: string;
    desc?: string;
    price?: number;
};

interface ProductCategories {
    name: string;
    products: ProductProps[];
}

function getProductCategories(): ProductCategories[] {
    const breads: ProductProps[] = [
            {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLn3_IarAvllKJtHxQ1jbCmhoH4fJ61dUUIO00D_FChIsJAfQjMjefEyL80UFh1ynN5KvjHEJX2oRbcvgJknK90kJ7qJIKVH5NOL44EA1V9CNNm_9JA5xH1yPlR-gWPObolSxf-sGva8yq2kkXV3HdmwaluK-_Ls6IEy6InO0IxoiPN8qF0F60vCK33U1e2x7Sxp9SYNJ4vnv3aobJ8jXTtp59J-cjAAuFfM0ok0Gd7AZV_q9x-XYJC2ZWfCDof3SLmbwY9c8LlSKH",
                name: "Artisan Sourdough",
                brief: "Our signature sourdough bread, perfect for any meal."
            },
            {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD19CEI9ofek2lqteyuCJfRDTX4Qna_tIj4ncB2diXscVmcrj-ehrttkvW7KJ7aeNr4AqQvl9_blGqz4EPooxGKP6MyyVI6ictINIJomQCNB1xJiBCZwzTtRDzQsVlpkzYV_3StEpM_VY-7OxkKPyDr029Rl1cJXyQfhcbZlihv42VxBSZETcd33e2LXuXmhANSR3yR3rL0p0RHXQj_voDwWe1PMC1ZMWVjLO-jZ0ioh70WC7XXA6aWzsO90RYccNhny898Z-FKollU",
                name: "Chocolate Croissant",
                brief: "Flaky croissant filled with rich chocolate."
            },
            {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDb4IGNpXsUP4kYjoiLhEcs4TRFJ8RXesFa6WDHJIvltY1qGU2MWk835OyN6WBc_xZS4jO2vHC5PE4-sYBjJs6Lb7IacOd9tIhkAFYjlTmSXtiqKcUZm5PszjjxNWczBPCkwdTVeZw2Me5b4gWUwQ8O1iBM79IOEEdyzLO4SXFUva9c3rN6hCxmAXS_XEeXDsYRJ4TX0a189G5f8E1V2qcEMX8kTGdd9je0tEduFJrb5gB1SjxLmBcfiBSuWhzhv0ZjCamcA-8r56e",
                name: "Blueberry Muffins",
                brief: "Moist muffins bursting with fresh blueberries."
            },
            {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoprZQAmFyknI8fF1La-4-DApT9HTZI1LZN4sijBHifUrZJ2Lu3C_r4LjKP9k-ClXkGzbTU7Fp1w8_KI75x-_IEiLjsDRBl5e9ir_QwUqxHcykxqs8oGE6wrsWZoopO1eLaI8c_wQ1VEHSAFTwKZgtT7ywtcEngTFyqkwVmVUcxuE2gYArpMTiQsZmJ8BG61u977qv8HAjW23f_gXxoNaSFxRna_JTsDcYO7cxE6kD7thleC2O7Rv2s2v4PKh-eu6jW0ljIVJ11LP0",
                name: "Cinnamon Rolls",
                brief: "Swirls of cinnamon and sugar, topped with a creamy glaze."
            }]

        const pastries: ProductProps[] = [
            {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoprZQAmFyknI8fF1La-4-DApT9HTZI1LZN4sijBHifUrZJ2Lu3C_r4LjKP9k-ClXkGzbTU7Fp1w8_KI75x-_IEiLjsDRBl5e9ir_QwUqxHcykxqs8oGE6wrsWZoopO1eLaI8c_wQ1VEHSAFTwKZgtT7ywtcEngTFyqkwVmVUcxuE2gYArpMTiQsZmJ8BG61u977qv8HAjW23f_gXxoNaSFxRna_JTsDcYO7cxE6kD7thleC2O7Rv2s2v4PKh-eu6jW0ljIVJ11LP0",
                name: "Cinnamon Rolls",
                brief: "Swirls of cinnamon and sugar, topped with a creamy glaze."
            },
            {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDb4IGNpXsUP4kYjoiLhEcs4TRFJ8RXesFa6WDHJIvltY1qGU2MWk835OyN6WBc_xZS4jO2vHC5PE4-sYBjJs6Lb7IacOd9tIhkAFYjlTmSXtiqKcUZm5PszjjxNWczBPCkwdTVeZw2Me5b4gWUwQ8O1iBM79IOEEdyzLO4SXFUva9c3rN6hCxmAXS_XEeXDsYRJ4TX0a189G5f8E1V2qcEMX8kTGdd9je0tEduFJrb5gB1SjxLmBcfiBSuWhzhv0ZjCamcA-8r56e",
                name: "Blueberry Muffins",
                brief: "Moist muffins bursting with fresh blueberries."
            },
            {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoprZQAmFyknI8fF1La-4-DApT9HTZI1LZN4sijBHifUrZJ2Lu3C_r4LjKP9k-ClXkGzbTU7Fp1w8_KI75x-_IEiLjsDRBl5e9ir_QwUqxHcykxqs8oGE6wrsWZoopO1eLaI8c_wQ1VEHSAFTwKZgtT7ywtcEngTFyqkwVmVUcxuE2gYArpMTiQsZmJ8BG61u977qv8HAjW23f_gXxoNaSFxRna_JTsDcYO7cxE6kD7thleC2O7Rv2s2v4PKh-eu6jW0ljIVJ11LP0",
                name: "Cinnamon Rolls",
                brief: "Swirls of cinnamon and sugar, topped with a creamy glaze."
            },
            {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD19CEI9ofek2lqteyuCJfRDTX4Qna_tIj4ncB2diXscVmcrj-ehrttkvW7KJ7aeNr4AqQvl9_blGqz4EPooxGKP6MyyVI6ictINIJomQCNB1xJiBCZwzTtRDzQsVlpkzYV_3StEpM_VY-7OxkKPyDr029Rl1cJXyQfhcbZlihv42VxBSZETcd33e2LXuXmhANSR3yR3rL0p0RHXQj_voDwWe1PMC1ZMWVjLO-jZ0ioh70WC7XXA6aWzsO90RYccNhny898Z-FKollU",
                name: "Chocolate Croissant",
                brief: "Flaky croissant filled with rich chocolate."
            },
            {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDb4IGNpXsUP4kYjoiLhEcs4TRFJ8RXesFa6WDHJIvltY1qGU2MWk835OyN6WBc_xZS4jO2vHC5PE4-sYBjJs6Lb7IacOd9tIhkAFYjlTmSXtiqKcUZm5PszjjxNWczBPCkwdTVeZw2Me5b4gWUwQ8O1iBM79IOEEdyzLO4SXFUva9c3rN6hCxmAXS_XEeXDsYRJ4TX0a189G5f8E1V2qcEMX8kTGdd9je0tEduFJrb5gB1SjxLmBcfiBSuWhzhv0ZjCamcA-8r56e",
                name: "Blueberry Muffins",
                brief: "Moist muffins bursting with fresh blueberries."
            },
            {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoprZQAmFyknI8fF1La-4-DApT9HTZI1LZN4sijBHifUrZJ2Lu3C_r4LjKP9k-ClXkGzbTU7Fp1w8_KI75x-_IEiLjsDRBl5e9ir_QwUqxHcykxqs8oGE6wrsWZoopO1eLaI8c_wQ1VEHSAFTwKZgtT7ywtcEngTFyqkwVmVUcxuE2gYArpMTiQsZmJ8BG61u977qv8HAjW23f_gXxoNaSFxRna_JTsDcYO7cxE6kD7thleC2O7Rv2s2v4PKh-eu6jW0ljIVJ11LP0",
                name: "Cinnamon Rolls",
                brief: "Swirls of cinnamon and sugar, topped with a creamy glaze."
            }]

        const cakes: ProductProps[] = [
            {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDb4IGNpXsUP4kYjoiLhEcs4TRFJ8RXesFa6WDHJIvltY1qGU2MWk835OyN6WBc_xZS4jO2vHC5PE4-sYBjJs6Lb7IacOd9tIhkAFYjlTmSXtiqKcUZm5PszjjxNWczBPCkwdTVeZw2Me5b4gWUwQ8O1iBM79IOEEdyzLO4SXFUva9c3rN6hCxmAXS_XEeXDsYRJ4TX0a189G5f8E1V2qcEMX8kTGdd9je0tEduFJrb5gB1SjxLmBcfiBSuWhzhv0ZjCamcA-8r56e",
                name: "Blueberry Muffins",
                brief: "Moist muffins bursting with fresh blueberries."
            },
            {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoprZQAmFyknI8fF1La-4-DApT9HTZI1LZN4sijBHifUrZJ2Lu3C_r4LjKP9k-ClXkGzbTU7Fp1w8_KI75x-_IEiLjsDRBl5e9ir_QwUqxHcykxqs8oGE6wrsWZoopO1eLaI8c_wQ1VEHSAFTwKZgtT7ywtcEngTFyqkwVmVUcxuE2gYArpMTiQsZmJ8BG61u977qv8HAjW23f_gXxoNaSFxRna_JTsDcYO7cxE6kD7thleC2O7Rv2s2v4PKh-eu6jW0ljIVJ11LP0",
                name: "Cinnamon Rolls",
                brief: "Swirls of cinnamon and sugar, topped with a creamy glaze."
            },
        ];

    const categories = [
        { name: "Breads", products: breads },
        { name: "Pastries", products: pastries },
        { name: "Cakes", products: cakes }
    ];

    return categories;
    }

function getProducts(): ProductProps[] {
    const products: ProductProps[]  = [
        {
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLn3_IarAvllKJtHxQ1jbCmhoH4fJ61dUUIO00D_FChIsJAfQjMjefEyL80UFh1ynN5KvjHEJX2oRbcvgJknK90kJ7qJIKVH5NOL44EA1V9CNNm_9JA5xH1yPlR-gWPObolSxf-sGva8yq2kkXV3HdmwaluK-_Ls6IEy6InO0IxoiPN8qF0F60vCK33U1e2x7Sxp9SYNJ4vnv3aobJ8jXTtp59J-cjAAuFfM0ok0Gd7AZV_q9x-XYJC2ZWfCDof3SLmbwY9c8LlSKH",
            name: "Artisan Sourdough",
            brief: "Our signature sourdough bread, perfect for any meal."
        },
        {
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD19CEI9ofek2lqteyuCJfRDTX4Qna_tIj4ncB2diXscVmcrj-ehrttkvW7KJ7aeNr4AqQvl9_blGqz4EPooxGKP6MyyVI6ictINIJomQCNB1xJiBCZwzTtRDzQsVlpkzYV_3StEpM_VY-7OxkKPyDr029Rl1cJXyQfhcbZlihv42VxBSZETcd33e2LXuXmhANSR3yR3rL0p0RHXQj_voDwWe1PMC1ZMWVjLO-jZ0ioh70WC7XXA6aWzsO90RYccNhny898Z-FKollU",
            name: "Chocolate Croissant",
            brief: "Flaky croissant filled with rich chocolate."
        },
        {
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDb4IGNpXsUP4kYjoiLhEcs4TRFJ8RXesFa6WDHJIvltY1qGU2MWk835OyN6WBc_xZS4jO2vHC5PE4-sYBjJs6Lb7IacOd9tIhkAFYjlTmSXtiqKcUZm5PszjjxNWczBPCkwdTVeZw2Me5b4gWUwQ8O1iBM79IOEEdyzLO4SXFUva9c3rN6hCxmAXS_XEeXDsYRJ4TX0a189G5f8E1V2qcEMX8kTGdd9je0tEduFJrb5gB1SjxLmBcfiBSuWhzhv0ZjCamcA-8r56e",
            name: "Blueberry Muffins",
            brief: "Moist muffins bursting with fresh blueberries."
        },
        {
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoprZQAmFyknI8fF1La-4-DApT9HTZI1LZN4sijBHifUrZJ2Lu3C_r4LjKP9k-ClXkGzbTU7Fp1w8_KI75x-_IEiLjsDRBl5e9ir_QwUqxHcykxqs8oGE6wrsWZoopO1eLaI8c_wQ1VEHSAFTwKZgtT7ywtcEngTFyqkwVmVUcxuE2gYArpMTiQsZmJ8BG61u977qv8HAjW23f_gXxoNaSFxRna_JTsDcYO7cxE6kD7thleC2O7Rv2s2v4PKh-eu6jW0ljIVJ11LP0",
            name: "Cinnamon Rolls",
            brief: "Swirls of cinnamon and sugar, topped with a creamy glaze."
        }
    ];

    return products;
}

export type { ProductProps as ProductProp, ProductCategories };
export { getProductCategories, getProducts };