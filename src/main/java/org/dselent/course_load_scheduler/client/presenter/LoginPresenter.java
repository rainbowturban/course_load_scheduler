package org.dselent.course_load_scheduler.client.presenter;


public interface LoginPresenter extends BasePresenter
{
	IndexPresenter getParentPresenter();
	void setParentPresenter(IndexPresenter parentPresenter);
	void login();
}
