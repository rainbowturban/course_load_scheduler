package org.dselent.course_load_scheduler.client.view;

import org.dselent.course_load_scheduler.client.presenter.HomePresenter;

import com.google.gwt.user.client.ui.VerticalPanel;

public interface HomeView extends BaseView<HomePresenter>{
	public VerticalPanel getFacultyListVerticalPanel();
	public void setFacultyListVerticalPanel(VerticalPanel facultyListVerticalPanel);
}
