package org.dselent.course_load_scheduler.client.presenter;

public interface CreateAccountPresenter extends BasePresenter {

	IndexPresenter getParentPresenter();
	void setParentPresenter(IndexPresenter parentPresenter);
	void createAccount();
}
