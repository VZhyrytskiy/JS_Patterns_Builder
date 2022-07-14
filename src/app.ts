import { createUrlFilter} from './problem';

const orderFilter = {
    category: 'electronic',
    status: ['apporved', 'paid'],
    openOnly: true
};

// problem
{
    const filterResult = createUrlFilter(orderFilter);
    console.log(filterResult);
}

// first step
{
    
}

// second step
{
   
}

// final step
{
    
}
