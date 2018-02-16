package org.dselent.course_load_scheduler.client.view;

import org.dselent.course_load_scheduler.client.presenter.AddCoursePresenter;

import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextBox;

public interface AddCourseView extends BaseView<AddCoursePresenter>{

	//gets dropdown
	public ListBox getFrequencyDropdown();
	public void setFrequencyDropdown(ListBox dropdown);
	
	
	//getters for text fields
	public TextBox getCourseNameField();
	public TextBox getCourseNumberField();
}
