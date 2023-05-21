import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} || Kids Paradise`
    }, [title])
}
export default useTitle;