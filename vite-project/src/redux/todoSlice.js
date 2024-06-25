import { createSlice } from '@reduxjs/toolkit';

let nextId = 0;
const initialState = [];

export const todoSlice = createSlice({
    name: 'todofunction',
    initialState,
    reducers: {
        add: (state, action) => {
            nextId++;
            state.push({
                id: nextId,
                text: action.payload,
                complete: false,
            });
        },
        remove: (state, action) => {
            return state.filter(e => e.id !== action.payload); 
            //각 항목 e에 대해 e.id와 action.payload가 일치하지 않는 경우에만 배열에 포함
            //action.payload와 같은 id를 가진 항목은 상태에서 제거
        },
        complete: (state, action) => {
            return state.map(e => e.id === action.payload ? { ...e, complete: !e.complete } : e);
            // 조건이 참이면 새로운 객체 생성, complete 속성은 반전 시킴
            //거짓이면 원래 객체 e 반환
        }
    }
});

export const { add, remove, complete } = todoSlice.actions;
//액션 생성자를 내보냄
export default todoSlice.reducer;
//리듀서를 기본 내보내기로 설정
