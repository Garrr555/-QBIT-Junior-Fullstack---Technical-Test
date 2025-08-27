// case2.ts
type IComment = {
  commentId: number;
  commentContent: string;
  replies?: IComment[];
};

const comments: IComment[] = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          { commentId: 111, commentContent: "Haai juga hai jugaa" },
          { commentId: 112, commentContent: "Haai juga hai jugaa" },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [{ commentId: 121, commentContent: "Haai juga hai jugaa" }],
      },
    ],
  },
  { commentId: 2, commentContent: "Halooo" },
];

// Fungsi recursive untuk hitung semua komentar
function countComments(comments: IComment[]): number {
  let count = 0;
  for (const c of comments) {
    count++; // hitung komentar itu sendiri
    if (c.replies) {
      count += countComments(c.replies); // hitung balasan
    }
  }
  return count;
}

// run kode
console.log("Total komentar:", countComments(comments));
