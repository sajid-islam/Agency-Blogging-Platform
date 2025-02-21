import getAllBlogs from "@/lib/getAllBlogs";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const MyBlogsTable = async () => {
    const blogs = await getAllBlogs();

    return (
        <div className="w-full">
            {/* Apply overflow-x-auto to the wrapper div */}
            <div className="overflow-x-auto w-full">
                {/* Add a max-width constraint to the table */}
                <Table className="min-w-max">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Image</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {blogs.map((blog) => (
                            <TableRow key={blog._id}>
                                <TableCell className="font-medium">
                                    <img
                                        className="w-20 h-10 rounded object-cover"
                                        src={blog.image}
                                        alt={blog.title}
                                    />
                                </TableCell>
                                <TableCell>{blog.title}</TableCell>
                                <TableCell>{blog.description}</TableCell>
                                <TableCell>
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                                        Update
                                    </button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                                        Delete
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};
export default MyBlogsTable;