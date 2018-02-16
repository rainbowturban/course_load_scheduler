package org.dselent.course_load_scheduler.client.presenter;


public interface AdminCalendarPresenter extends BasePresenter
{
	IndexPresenter getParentPresenter();
	void setParentPresenter(IndexPresenter parentPresenter);
}
