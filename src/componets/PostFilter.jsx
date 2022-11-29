
import MySelect from "./Ui/select/MySelect";
import MyInput from "./Ui/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput value={filter.query} placeholder="Searching..." onChange={e => setFilter({...filter, query: e.target.value})}/>
            <MySelect
                value={filter.sort}
                options={[
                    {value: 'title', name:'Sort by title'},
                    {value: 'body', name:'Sort by description'},
                ]}
                defaultValue="Sort by"
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            />
        </div>
    );
};

export default PostFilter;