import Layout from '../comps/Layout';

export default () => {

    function find_max(nums) {
        let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
        
        for (let num in nums) {
            console.log(num);
        //     if (num > max_num) {
        //         max_num = num;
        //         // (Fill in the missing line here)
        //     }
        }
        // return max_num;
    }

    console.log(find_max([1,3,5,1,6,2,3,20]));

    return (
        <Layout>
            <div id="index">
                index page !
            </div>
        </Layout>
    )
}

