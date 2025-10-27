class parent
{
    Assets1()
    {
        console.log("Eita amr dadar assets");
    }
    Assets2()
    {
        console.log("Eita amar babar assets");
    }
}

class ami extends parent
{
    MyAssets()
    {
        super.Assets1();
        super.Assets2();
    }
}

let MyAssets=new ami();
MyAssets.MyAssets()