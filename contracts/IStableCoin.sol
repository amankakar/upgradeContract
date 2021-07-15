pragma solidity ^0.8.0;

interface IStableCoin{
    function transferWithData(address _account,uint256 _amount, bytes calldata _data ) external returns (bool success) ;
    function transfer(address _account, uint256 _amount) external returns (bool success);
    function burn(uint256 _amount) external;
    function burnFrom(address _account, uint256 _amount) external;
    function mint(address _account, uint256 _amount) external returns (bool);
    function transferOwnership(address payable _newOwner) external returns (bool);
    
     function balanceOf(address who) external view returns (uint256);
     function allowance(address owner, address spender) external view returns (uint256);
    function transferFrom(address from, address to, uint256 value) external returns (bool);


}
