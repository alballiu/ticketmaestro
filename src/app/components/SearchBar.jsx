"use client";
import { useSearchParams, usePathname , useRouter} from 'next/navigation';

export default function SearchBar() {
 
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSubmit(formData) {
  
    const query = formData.get("query");
    
        const params = new URLSearchParams(searchParams);
       
        if (query) {
          params.set('query',query);
        } else {
          params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
  }
  
    return (
      <form action={handleSubmit}>
        <input
          name='query' 
          type="text" 
          placeholder="Search..."/>
        <button type='submit'>Search</button>
      </form>
    );
  }