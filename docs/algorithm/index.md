# algorithm

### 
[参考](https://101.zoo.team/)
## diff算法
定义 对比两颗vdom树，找出其中的差异的算法称为diff算法
### diff的复杂度
一般如果把两个树结构做diff，复杂度为O(n^3) 
所以只做同层的对比，dom类型 变了就不再对比子节点

### 第1题（2022/7/9）：[两数之和](https://leetcode.cn/problems/two-sum/)

**思路1:暴力解法**
```tsx
const twoSum = (nums: number[], target: number) => {
	for (let i = 0; i < nums.length; i ++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i ,j]
			}
		}
	}
	
	return [-1, -1]
}
```
**思路二：
用map 数据结构记录当前  值的目标值 和 索引 
比如target 是 10   当前索引为3   当前是4  那么目标值是6  记录 { 6:  3}
每次循环前 判断当前值 是否已经存在 如果存在 则返回当前 索引  和 map.get(num[i])**
```tsx
const twoSum = (nums, target) => {
	// 声明map数据结构
	const map = new Map();
	for (let i = 0; i < nums.length; i ++) {
		if (map.has(nums[i])) {
			return [map.get(nums[i]), i]
		}else {
			 // 记录当前遍历值的目标值 和 索引 
			map.set(target - nums[i], i)
		}
		
	}
	return [-1, -1]
	
}
```
### 第2题（2022/7/10）：[链表删除元素](https://leetcode.cn/problems/remove-linked-list-elements/)
**思路1: 哨兵元素**
```tsx

function removeElements(head: ListNode | null, val: number): ListNode | null {
	
	// 声明一个哨兵元素 它的next 指向链表起点head
	let soldier = {
		next: head
	};
	// current 初始值 为 哨兵元素
	let current = soldier;
	
	// 直接从next开始
	while (cur.next) {
		if (cur.next.val === val) {
			// next的值为要删除的值 则把cur.next 指向cur.next.next
			cur.next = cur.next.next;
		} else {
			// next的值不是要删除的 则正常迭代遍历
			cur = cur.next
		}
	}
	// 跳出循环则返回 head 
	return soldier.next;
	
};
```
**思路2: 递归
关注下 return 和 边界**
```tsx
function removeElements(head: ListNode | null, val: number): ListNode | null {
	if (head === null) {
		return head;
	}

    if (head.val === val) return removeElements(head.next, val);
    head.next = removeElements(head.next, val);
    return head;	
	
};



function removeElements(head: ListNode | null, val: number): ListNode | null {

	if (!head) {
		return head;
	}
	
	head.next = removeElements(head.next ,val);
	
	// head.val 
	return head.val === val ? head.next : head;
	

	
};
```

### 第3题（2022/7/11）：[判断环形链表](https://leetcode.cn/problems/linked-list-cycle/)
**思路一：利用Set数据结构**
```tsx
function hasCycle(head: ListNode | null): boolean {
    // 可以用Set数据结构存储遍历到的链表节点 如果有重复则有环
    const set = new Set();

    while (head) {
        if (set.has(head)) {
            return true
        }
        set.add(head);
        head = head.next
    }

    return false;
};
```
**思路二：快慢指针//重要思想。//判断边界和如何跳出循环**
```tsx

function hasCycle(head: ListNode | null): boolean {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            return true
        }
    }


    return false;
};
```
### 第4题（2022/7/12）：[LRU缓存](https://leetcode.cn/problems/lru-cache/)
LRU是Least Recently Used的缩写，即最近最少使用，是一种常用的[页面置换算法](https://baike.baidu.com/item/%E9%A1%B5%E9%9D%A2%E7%BD%AE%E6%8D%A2%E7%AE%97%E6%B3%95/7626091)，选择最近最久未使用的页面予以淘汰。该算法赋予每个页面一个访问字段，用来记录一个页面自上次被访问以来所经历的时间 t，当须淘汰一个页面时，选择现有页面中其 t 值最大的，即最近最少使用的页面予以淘汰。

### 第5题（2022/7/13）：建设中...
### 第6题（2022/7/14）：建设中...
### 第7题（2022/7/15）：建设中...
