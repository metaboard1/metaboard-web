'use client';

import { useEffect, useState, type FC } from "react";
import { Badge } from "@/components/ui";
import { $crud } from "@/factory/crudFactory";
import { useRouter } from "next/navigation";

const BrowseByTagsSection: FC = () => {

    const [tags, setTags] = useState([]);
    const router = useRouter();

    useEffect(() => {
        retrieveTags();
    }, []);

    const retrieveTags = async () => {
        try {
            const { data: { rows } } = await $crud.retrieve('tags');
            setTags(() => rows);
        } catch (e) {
            console.error(e)
        }
    }

    const handleSearchByTag = (value: string) => {
        router.push(`/articles/0/${encodeURIComponent(value)}#st`);
    }

    return (<>
        <div className="md:col-span-1">
            <div className="sticky top-24">

                <div className="bg-white rounded-2xl p-6 shadow-sm mb-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                        Browse By Tags
                    </h3>
                    <div className="space-4 flex gap-2 flex-wrap">
                        {tags.map(({ name }: any, index: number) => (

                            <Badge
                                key={index}
                                variant='outline'
                                className='cursor-pointer'
                                onClick={() => handleSearchByTag(`#${name}`)}
                            >
                                # {name}
                            </Badge>
                        ))}
                    </div>
                </div>

            </div>
        </div>

    </>)
}

export default BrowseByTagsSection;