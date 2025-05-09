-- AddForeignKey
ALTER TABLE "signal" ADD CONSTRAINT "signal_selected_user_id_fkey" FOREIGN KEY ("selected_user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
