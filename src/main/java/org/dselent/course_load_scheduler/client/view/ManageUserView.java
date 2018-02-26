package org.dselent.course_load_scheduler.client.view;

import org.dselent.course_load_scheduler.client.presenter.ManageUserPresenter;

import com.google.gwt.user.client.ui.Grid;

public interface ManageUserView extends BaseView<ManageUserPresenter>{
	public Grid getUsersGrid();

}
